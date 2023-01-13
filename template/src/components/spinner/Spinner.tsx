import { motion } from "framer-motion";
import { FaDotCircle } from "react-icons/fa";
import { PropsSpinner } from "src/types/spinner";

export const Spinner = (props: PropsSpinner) => {
    const items = props.items ? props.items : [
        {
            icon: <FaDotCircle />

        },
        {
            icon: <FaDotCircle />

        },
        {
            icon: <FaDotCircle />

        },
        {
            icon: <FaDotCircle />

        },
        {
            icon: <FaDotCircle />

        },
        {
            icon: <FaDotCircle />

        },
        {
            icon: <FaDotCircle />

        },
        {
            icon: <FaDotCircle />

        },
        {
            icon: <FaDotCircle />

        },
    ];
    const className = props.fixed ? 'fixed top-[50%] left-[50%]' : props.className ? props.className : ''

    return (
        <>
            <motion.div className={className}
                animate={{
                    rotate: 360
                }}

                transition={{ repeat: Infinity, repeatType: 'mirror', duration: 5 }}>
                {
                    items.map((el, index) =>
                        <motion.span
                            key={`${index}Motion${el.path}`}
                            layout
                            transition={{ repeat: 0, duration: 2, delay: .1, type: 'tween' }}
                            initial={{
                                position: 'absolute',
                                display: 'block'
                            }}
                            animate={{
                                z: 0,
                                x: (items.length + 150) * (-1) * (Math.cos(Math.PI - (2 * Math.PI * index) / items.length)),
                                y: (items.length + 150) * (Math.sin(Math.PI - (2 * Math.PI * index) / items.length)),
                            }}
                        >
                            {el.icon}
                        </motion.span>
                    )
                }
            </motion.div>
            <div className={className}>
            {
                props.children ? (props.children): null
            }
            </div>

        </>
    )
}

export default Spinner