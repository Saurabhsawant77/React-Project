import React, { useState } from 'react';

function BGChange() {
    const [bgColor, setBgColor] = useState('bg-orange-200');

    const changeColor = (color) => {
        setBgColor(color);
    };

    return (
        <>
            <div className={`${bgColor} mb-4 rounded-xl min-h-screen`}>
                <div className="flex justify-center items-center min-h-screen">
                    <button 
                        onClick={() => changeColor('bg-blue-500')} 
                        className='rounded-xl bg-blue-500 m-5 p-3 hover:border'>
                        Blue
                    </button>
                    <button 
                        onClick={() => changeColor('bg-green-500')} 
                        className='rounded-xl bg-green-500 m-5 p-3 hover:border'>
                        Green
                    </button>
                    <button 
                        onClick={() => changeColor('bg-orange-500')} 
                        className='rounded-xl bg-orange-500 m-5 p-3 hover:border'>
                        Orange
                    </button>
                    <button 
                        onClick={() => changeColor('bg-red-500')} 
                        className='rounded-xl bg-red-500 m-5 p-3 hover:border'>
                        Red
                    </button>
                    <button 
                        onClick={() => changeColor('bg-gray-500')} 
                        className='rounded-xl bg-gray-500 m-5 p-3 hover:border'>
                        Grey
                    </button>
                    <button 
                        onClick={() => changeColor('bg-black')} 
                        className='rounded-xl bg-black m-5 p-3 hover:border'>
                        Black
                    </button>
                    <button 
                        onClick={() => changeColor('bg-purple-500')} 
                        className='rounded-xl bg-purple-500 m-5 p-3 hover:border'>
                        Purple
                    </button>
                </div>
            </div>
        </>
    );
}

export default BGChange;
