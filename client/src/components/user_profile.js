import { useEffect } from "react";
import { connect } from "react-redux";
const axios = require("axios");

export const user_profile = () => {
    axios.get('/:id', (req, res) => {
        
        res.json({message: "Grabed user from database"})
    })

    return{
        <div>
        
        </div>
    }
}