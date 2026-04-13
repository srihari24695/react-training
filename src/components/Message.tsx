type MessageProps = {
    text: string;
    color: string;
}

function Message(props: MessageProps) {

    console.log(props);
    return (
        <div>
            <h4 style={{color: props.color}}> Message: {props.text} </h4>
            <p> Generated at: {new Date().toLocaleTimeString()} </p>
        </div>
    )
}
``
export default Message;