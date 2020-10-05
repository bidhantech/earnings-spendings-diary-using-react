import React from 'react';

function Form({addNewDetail}) {
    return <form className="Form" 

        onSubmit={(e)=>{
            
            let select_type= document.querySelector('.select-type').value;
            let amount= document.querySelector('.amount').value;
            let details=document.querySelector('.details').value;
            let date= new Date().toLocaleString();

            let newData={select_type: select_type, amount: amount, details: details, date: date}

            e.preventDefault();
            addNewDetail(newData);

            document.querySelector('.amount').value='';
            document.querySelector('.details').value='';
            document.querySelector('.select-type').value='earn';
        }
        }>
        <select className="select-type">
            <option value="earn">Earning</option>
            <option value="spend">Spending</option>
        </select>
        <input type="Number" className="amount" placeholder="Amount" required />
        <input type="text" className="details" placeholder="Enter Details" required />
        <input type="submit" className="submit-btn" value="+" required />
    </form>
}

export default Form;