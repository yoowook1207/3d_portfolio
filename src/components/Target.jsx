import {useGLTF} from "@react-three/drei";
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react"

export const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    useGSAP(() =>{
        gsap.to(targetRef.current.position, {
            duration: 1.5,
            y: targetRef.current.position.y +0.5,
            ease: "elastic.out(1, 0.3)",
            repeat: -1,
            yoyo: true,
        })
    })

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
            <primitive object={scene} />
        </mesh>
    )
}