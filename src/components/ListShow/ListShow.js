import React, { useEffect, useState } from 'react';

const ListShow = () => {
    const [lists, setLists]=useState([])
    useEffect(()=>{ 
        fetch('http://localhost:5055/list')
        .then(res=>res.json())
        .then(data=>setLists(data))
      
        })
    return (
        <div>
          {
              lists.map(list =><li>{list.name}</li>)
          }  
        </div>
    );
};

export default ListShow;