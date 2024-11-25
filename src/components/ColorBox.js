import ColorContext, {ColorConsumer} from "../contexts/color";


const ColorBox = () => {

    return (
        <ColorConsumer>
            {
                // value 는  {color:'black'}
                ({state}) => (
                    <>
                        <div
                            style={{
                                width: '64px',
                                height: '64px',
                                background: state.color
                            }}
                        />
                        <div
                            style={{
                                width: '32px',
                                height: '32px',
                                background: state.subColor
                            }}
                        />
                    </>
                )
            }
        </ColorConsumer>
    )
}
export default ColorBox;