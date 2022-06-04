import React from 'react'
import { useContext } from "react";
import { HomeContext } from '../pages';

export default function Presentation() 
{
    const data = useContext(HomeContext);
 return (
    <main>
        <h1>{data.original_title}</h1>
        <h4>genre : </h4>
        <p>{data.genres.map(item=>`${item.name}`)}</p>
        <h3>synopsis : </h3>
        <p>{data.overview}</p>
    </main>
  )
}
