import { useMotionValue, motion, useTransform, useSpring } from 'framer-motion'
import React, { useRef } from 'react'

function AppleDocMenu({ children }) {

    let mouseX = useMotionValue(Infinity)

    const handleMouseMove = (e) => {
        mouseX.set(e.pageX)
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center w-100'>
                <div className='d-flex px-3 rounded_corner align-items-end pb-1 doc_prt' style={{ height: "80px" }} onMouseMove={handleMouseMove} onMouseLeave={() => mouseX.set(Infinity)}>
                    {children?.map((item, i) =>
                        <DocItem {...{ mouseX }} key={i} >
                            {item}
                        </DocItem>
                    )}
                </div>
            </div >
        </>
    )
}

export default AppleDocMenu

function DocItem({ mouseX, children }) {
    const item = useRef(null)

    let distance = useTransform(mouseX, val => {
        const bounds = item.current?.getBoundingClientRect();
        return val - (!!bounds?.x ? bounds?.x : 0) - (!!bounds?.width ? bounds?.width : 0) / 2
    })

    let widthSync = useTransform(distance, [-200, 0, 200], [70, 300, 70])
    let width = useSpring(widthSync, { damping: 20, mass: 1, stiffness: 200 })

    return (
        <>
            <motion.div
                ref={item}
                className='rounded_corner mx-1 doc_item'
                style={{ height: width, width: width, zIndex: 1000 }}
            >
                {children}
            </motion.div>
        </>
    )
}
