import React from 'react';

function List({ remove , data }) {

        data.sort((a,b)=>{
                return new Date(b.date) - new Date(a.date);
        })
       
        return <ul className="List">
              
                <li>
                        <span className="date title"> Date </span>
                        <span className="detail title"> Details </span>
                        <span className="earn title"> Amount </span>
                        <span className="delete title"> Delete </span>
                </li>
     
                {data.map((t) =>
                        <li key={t.date}>
                                <span className="date"> {t.date} </span>
                                <span className="detail"> {t.details} </span>
                                <span className={t.select_type}>{t.select_type==='spend'?'-':''}{t.amount}</span>
                                <span className="delete" onClick={()=>remove(t.date)}> X </span>
                        </li>
 
        
                )}
        </ul>
}


export default List;
