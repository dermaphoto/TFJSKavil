import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import LoadingSpinner from './LoadingSpinner';

const MODEL_URL = process.env.PUBLIC_URL + '/kavilres23/';
const LABELS_URL = MODEL_URL + 'labels.json';
const MODEL_JSON = MODEL_URL + 'model.json';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
    result: {
        maxWidth: '400px',
        textAlign: 'center',
        boxShadow: '1px 1px 2px 1px rgba(0,0,0,.15)',
        margin: '20px',
        padding: '10px',
        color: '#FFFFFF',
        fontWeight: '500',
        backgroundColor: '#3F51BF',
        marginBottom: '50px',
        borderRadius: '5px',
        transition: 'all .2s ease-in-out',
    }
}));

const Model = () => {
    const classes = useStyles();
    const [img, setImg] = useState();
    const [model, setModel] = useState();
    const [labels, setLabels] = useState();
    const [loading, setLoading] = useState(false);
    const imageRef = useRef();
    const resultRef = useRef();

    const loadModel = async () => {
        setLoading(true);
        const savedModel = localStorage.getItem('kavilres23');
        const savedLabels = localStorage.getItem('kavilres23_labels');
        if (savedModel && savedLabels) {
            const model = await tf.loadLayersModel('indexeddb://kavilres23'); 
            let labels_json = JSON.parse(savedLabels);
            setModel(model);
            setLabels(labels_json)
            console.log("Saved Resnet Model Found")
        } else {
            // Loading Model for first time
            const model = await tf.loadLayersModel(MODEL_JSON);
            setModel(model);
            const response = await fetch(LABELS_URL);
            let labels_json = await response.json();
            setLabels(labels_json)
            localStorage.setItem('kavilres23', true);
            model.save('indexeddb://kavilres23')
            localStorage.setItem('kavilres23_labels', JSON.stringify(labels_json));
        }
        setLoading(false);
    }

    const onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImg(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    useEffect(() => {
        if (model && labels && img && imageRef) {
            const batched = tf.tidy(() => {
                const img = tf.browser.fromPixels(imageRef.current);
                const small = tf.image.resizeBilinear(img, [224, 224]).div(255);
                
                // Reshape to a single-element batch so we can pass it to executeAsync.
                return small.expandDims(0).toFloat();
            });
            
            const results = model.predict(batched)
            const scores = results.arraySync()[0];
            console.log(scores)
            results.dispose();
            batched.dispose();
        
            const finalScores = scores.map((score, i) => ({
                label: labels[i],
                score: score
            }));
                
            finalScores.sort((a, b) => b.score - a.score);
            resultRef.current.innerHTML = `<div>${finalScores[0].label} : ${finalScores[0].score} </div><div>${finalScores[1].label} : ${finalScores[1].score}</div>`
        }
    }, [model, labels, img, imageRef, resultRef])

    return (    
        <div>
            {model && labels ? (
                <div>
                    <div style={{ margin: '30px', marginTop: '100px', textAlign: 'center' }}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="outlined-button-file"
                            type="file"
                            onChange={onSelectFile}
                        />
                        <label htmlFor="outlined-button-file">
                            <Button variant="contained" color="primary" component="span">
                                <PhotoCamera /> &nbsp; CHOOSE IMAGE
                            </Button>
                        </label> 
                    </div>                                  
                    {img && (
                        <div style={{ textAlign: 'center' }}>
                            <img src={img} style={{ maxWidth: "90%" }} alt="selected" ref={imageRef} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <div className={classes.result} ref={resultRef} />
                            </div>
                        </div>
                    )} 
                </div>         
            ) : (
                <div>
                    {loading ? (
                        <LoadingSpinner size={100} thickness={4} />
                    ) : (
                        <div style={{ margin: '30px', marginTop: '100px ', textAlign: 'center' }}>
                            <Button variant="contained" color="primary" component="span" onClick={loadModel}>
                                LOAD MODEL
                            </Button>
                        </div>   
                    )}
                </div>
            )}    
        </div>
    )
}

export default Model;