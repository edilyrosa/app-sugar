
type BtnProps = {
    onClickEvent?: () => void;
    onDubleClickEvent: (msj : number)=> void
}

function FunctionsProps({onDubleClickEvent}:BtnProps) {

    const edily = {
        nombre: 'edy',
        edad:33,
        sexo:true
    }

    console.log(Object.entries(edily)[1]);
    


    return ( 
        <button 
            // onClick={onClickEvent}
            onDoubleClick={() => onDubleClickEvent(1) }
            
            > hi!
        </button>
     );
}

export default FunctionsProps;