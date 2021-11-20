import React from 'react';
import axios from 'axios';
import './MusicTable.css'



function MusicTable (props){
        return (
            <table class ="center">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map(song =>
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <td><button onClick={()=>props.deleteSong(song)}>Delete</button></td>
                        </tr>  
                        )}
                </tbody>
            </table>
        );
}

export default MusicTable;