import React from "react";



interface TextBlockProps {
    decsription: string,
    height: string
}

interface stylesProps {
    backgroundColor: string,
    color: string,
    height: string,
    fontWeight: string,
    lineHeight: string,
    fontSize: string,
    display: string,
    alignItems: string,
    justifyContent: string,
    textAlign: any,
}

export const TextBlock: React.FC<TextBlockProps> = (props: TextBlockProps) => {
    
    const styles: stylesProps = {
        backgroundColor: '#000000',
        color: '#fff',
        height: props.height,
        fontWeight: '700',
        lineHeight: '36.6px',
        fontSize: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }

    return(

        <div style={styles}>
        <div style = {{whiteSpace: 'pre-wrap'}}>{props.decsription}</div>
        </div>

    )

}