import React from 'react'

export default function TestComponent({test}){
    
    
    


    
    

    
    let selection = -1
    let counter = test.time
    let oob = document.getElementsByName("test-title")
    let timer = setInterval(()=>{
        counter--;
        oob[0].textContent = counter
        if (counter <= 0) clearTimer()
    }, 1000)

    function clearTimer(){
        clearInterval(timer)

        
        let container = oob[0].parentElement
        
        
        if (selection === test.rightOption){
            oob[0].textContent = "Correcto!" 
            container.className = "test-timer-container-right"
        }else{
            
            oob[0].textContent = "Incorrecto!"
            container.className = "test-timer-container-wrong"  
        }

        let correct = document.getElementsByName(test.rightOption.toString())

        
        let rightButton = correct[0]
        rightButton.id = "rightButton"
        
        
    }

    
    let handleClick = e=>{
        
        selection = parseInt(e.target.name)
        
    }

    return (
        <div>
            
            <div className='test-timer-container'>
                <h1 className='test-timer-title' name = "test-title">
                    {test.time}
                </h1>
            </div>
            
            <div>
                
                <div className='test-question-container'>
                    <p className='test-question-text'>
                        {test.question}
                    </p>
                </div>
                
                <div className='test-options-content'>

                    <div className='test-option-content'>
                        <button className='test-option-button' 
                            id = "test-option-button1" name='0' 
                            onClick={handleClick}>
                            {test.options[0]}
                        </button>
                    </div>

                    <div className='test-option-content'>
                        <button className='test-option-button'
                            name='1' id = "test-option-button2"
                            onClick={handleClick}>
                        {test.options[1]}
                        </button>
                    </div>

                    <div className='test-option-content'>
                        <button className='test-option-button'
                            id = "test-option-button3" name='2' 
                            onClick={handleClick}>
                        {test.options[2]}
                        </button>
                    </div>

                    <div className='test-option-content' >
                        <button className='test-option-button'  
                            id= "test-option-button4" name='3'
                            onClick={handleClick}>
                        {test.options[3]}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

