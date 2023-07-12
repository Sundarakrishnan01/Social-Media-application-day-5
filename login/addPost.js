
import React from "react";

import Navbar from "./navbar";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './addPost.css';

export default function AddPost() {
    return (
        <div>
            <Navbar />
            <div className="d1">

                <h2>You can add your post here</h2>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
        </div>
    );
}

