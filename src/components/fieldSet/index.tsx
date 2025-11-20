import React from 'react'
import styles from './fieldSet.module.css'

type FieldSetProps = {
    variant?: "primary" | "secundary";
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>

const FieldSet = ({variant = "primary", children}: FieldSetProps) => {
    return (
    <fieldset className={`${styles.inputWapper} ${
        variant == "primary" ? styles.primary : styles.secundary 
    } `}>{children}</fieldset>
    )
}

export default FieldSet
