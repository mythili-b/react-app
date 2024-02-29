import React from "react";
function MyComponentWithJSX() {
    const element='Ready';
    const name='Sana';
    const age='25';
    var cTime=new Date().toTimeString();
    const isLoggedIn=true;
    return(
        <div>
            
            <h3 style={{color:'pink', fontWeight:'120px'}}><b>Example 1</b> </h3>
            <h3> Html Based Content</h3>
            <h3>{element}</h3>
            <hr/>
            <div>
                <h3 style={{color:'navy', fontWeight:'120px'}}><b>Example 2</b> </h3>
                <h3>B.MYTHILI</h3>
                <h3>2211CS010093</h3>
                <p>nested elements</p>
                <hr/>
                
                <div>
                    <h3 style={{color:'orange', fontWeight:'120px'}}><b>Example 3</b> </h3>
                    <h3 className="my-class">Malla Reddy University</h3>
                    <h3>Department of CSE</h3>
                    <p> Basic Attribute </p>
                    <hr/>
                     <div>
                        <h3 style={{color:'peach', fontWeight:'120px'}}>Example 4 </h3>
                        
                        <h3 className="g">She is {age} years old.</h3>
                        <p>Expressions </p> 
                        <hr/>
                        <hr/>
                        
                    <div>
                        <h2 style={{color:'brown', fontWeight:'120px'}}><b>Example 5</b> </h2>
                        
                        <h4>The Current Time is {cTime}</h4>
                        <p>Functional</p>

                        <hr/>
                        <div>
                        <h2 style={{color:'grey', fontWeight:'120px'}}><b>Example 6</b> </h2> 
                        
                        <h2>{isLoggedIn ? 'Welcome back!!' : 'Please log in.'}</h2>
                        <p>Conditional</p>
                        <hr/>
                        <div>
                            <h2 style={{color:'violet', fontWeight:'120px'}}><b>Example 7</b> </h2> 
                        
                            <h2>HELLO WORLD</h2>
                            <p>Fragments</p>
                            <hr/>
                            </div>

                            </div>
                        </div>
                    </div>              
                </div>
 
            </div>

            
        </div>
     
    );
    }
     export default  MyComponentWithJSX;