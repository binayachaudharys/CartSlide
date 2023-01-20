import React, { useState } from 'react';
import reactCSS from 'reactcss';
import { ChromePicker } from 'react-color';



export default function TestColor(Props) {

 
// console.log(Props);
    const [vcolor, setColor] = useState(Props.datacolor.colors);
    const [vcol, setCol] = useState();
    console.log(vcolor);
    const [displayColorPicker, setDisplay] = useState(false)

    const handleClick = () => {
        setDisplay(true);
    };

    const handleClose = () => {
        setDisplay(false);
    };
   
    const datacolor = vcolor.color[0];
console.log(vcol);
    const handleChange = (datacolor) => {
        setCol(datacolor.rgb );

      
    }; 


    const styles = reactCSS({
        'default': {
            color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `rgba(${vcolor.color[Props.index].r}, ${vcolor.color[Props.index].g}, ${vcolor.color[Props.index].b}, ${vcolor.color[Props.index].a})`,
            },
            swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
            },
            popover: {
                position: 'absolute',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },

        },
    });



    return (
        <div >
            <div style={styles.swatch} onClick={handleClick}>
                <div style={styles.color} />
            </div>
            {displayColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={handleClose} />
                <ChromePicker color={vcolor.color[Props.index]} onChange={handleChange} />
            </div> : null}

        </div>
    )
}


