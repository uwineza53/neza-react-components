import React, { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { ImEyeBlocked, ImSpinner10 } from "react-icons/im";

/**
 * ### Text Input
 * @param {*} props 
 * @usage
 * ```js
 * const alphaNumeric = {
    // Note: everything except %
    regex: "[^%<>]+$", 
    error: ["Invalid input!", "This field expects alphanumeric characters value except %, < or > characters."]
    };

 * <TextInput type="text|password" label="username" name="username" placeholder="Your username" pattern={alphaNumeric} error="Only 5 numeric digits required" required /> 
 * ```
 * @returns Text input of specified type
 */
export const TextInput = (props) => {
    const [focused, setFocused] = useState("false");
    const [openError, setOpenError] = useState(false);
    const [type, setType] = useState(props?.type);
    return (
        <section className="relative input-field w-full">
            <div className="relative">
                <input className={`input ${props.className}`} autoFocus={openError} autoCapitalize="true" pattern={props?.pattern?.regex} required={props?.required} focused={focused} onBlur={() => { setFocused("true"); setOpenError(false); }} type={ type } id={ props?.name } name={ props?.name } value={props?.value} placeholder={ props?.placeholder } onChange={ props?.onChange } />
                <label htmlFor="text">{ props?.label }</label>
                <div className="icons">
                    {props?.type === 'password' && (type === 'text' ? <FaEye size={18} color={`theme(colors.neutral.200)`} onClick={() => setType('password')} /> : <ImEyeBlocked size={18} color={`theme(colors.neutral.200)`} onClick={() => setType('text')} />)}
                    <IoInformationCircleOutline size={18} className="info" onClick={() => setOpenError(!openError)} />
                </div>
            </div>
            {openError && <p className="message"><b className="block">{ props?.pattern?.error[0] }</b>{ props?.pattern?.error[1] }</p>}
        </section>
    );

    /* 
        TODO: Usage

        <TextInput label="username" placeholder="Your username" pattern="[0-9]{1,5}" error="Only 5 numeric digits required" required="true" />
    */
}

/**
 * ### Selection Data List
 * @usage
 * ```javascript
 *  const alphaNumeric = {
    // Note: everything except %
    regex: "[^%<>]+$", 
    error: ["Invalid input!", "This field expects alphanumeric characters value except %, < or > characters."]
    };

 *  const arr = [
        { label: 'one' },
        { value: '2', label: 'two' },
        { value: '3', label: 'three' }
    ];

    <FieldList label="Model" name="model" placeholder="Choose Model" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={arr} listName="models" />
 * ```
 * @param {*} props 
 * @returns Searchable select box
 */
export const FieldList = (props) => {
    const [focused, setFocused] = useState("false");
    const [openError, setOpenError] = useState(false);

    return (
        <section className="relative input-field w-full">
            <div className="relative">
                <input className="input" list={ props.listName } pattern={props?.pattern?.regex} required={props?.required} focused={focused} onBlur={() => { setFocused("true"); setOpenError(false); }} type={props?.type} id={props?.name} name={props?.name} placeholder={props?.placeholder} onChange={props?.onChange} />
                <label htmlFor="text">{ props?.label }</label>
                <div className="icons">
                    <IoInformationCircleOutline size={19} className="info" onClick={() => setOpenError(!openError)} />
                </div>
            </div>
            <datalist id={props.listName}>
                {props?.dataList?.map((item) => (<option key={ item.value || item.label } value={ item.value || item.label }>{ item.label }</option>))}
            </datalist>
            {openError && <p className="message"><b className="block">{ props?.pattern?.error[0] }</b>{ props?.pattern?.error[1] }</p>}
        </section>
    );

    /* 
        TODO: Usage

        const arr = [
            { label: 'one' },
            { value: '2', label: 'two' },
            { value: '3', label: 'three' }
        ];

        <FieldList label="username" placeholder="Your username" pattern="[0-9]{1,5}" error="Only 5 numeric digits required" required="true" dataList={arr} listName="list" />
    */
}

/**
 * ### Select Field
 * @usage
 * 
 * ```js
 *  const alphaNumeric = {
    // Note: everything except %
    regex: "[^%<>]+$", 
    error: ["Invalid input!", "This field expects alphanumeric characters value except %, < or > characters."]
    };

 *  const arr = [
        { label: 'one' }, // This way, both value and label will be 'one'
        { value: '2', label: 'two' },
        { value: '3', label: 'three' }
    ];

    <FieldList label="List of numbers" name='numbers' pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={arr} />
 * ```
 * @param {*} props 
 * @returns Select box of items
 */
export const SelectField = (props) => {
    const [focused, setFocused] = useState("false");

    return (
        <section className="relative input-field w-full">
            <div className="relative">
                <select className="input" pattern={props?.pattern?.regex} required={props?.required} focused={focused} onBlur={() => setFocused("true")} type={props?.type} id={props?.name} value={props?.value} name={props?.name} onChange={props?.onChange}>
                    <option value=''>Select { props?.label }</option>
                    {props?.dataList?.map((item) => (<option key={ item.value || item.label } value={ item.value || item.label }>{ item.label }</option>))}
                </select>
                <label htmlFor="text">{ props?.label }</label>
            </div>
        </section>
    );

    /* 
        TODO: Usage

        const arr = [
            { label: 'one' },
            { value: '2', label: 'two' },
            { value: '3', label: 'three' }
        ];

        <FieldList label="List of numbers" pattern="[0-9]{1,5}" error="Only 5 numeric digits required" required="true" dataList={arr} />
    */
}

/**
 * ### Text area input field
 * @usage
 * ```js
 * const alphaNumeric = {
    // Note: everything except %
    regex: "[^%<>]+$", 
    error: ["Invalid input!", "This field expects alphanumeric characters value except %, < or > characters."]
    };

 * <TextArea pattern={alphaNumeric} label="Comment *" placeholder="Your institution comment *" required name='comment' />
 * ```
 * @param {*} props 
 * @returns Large input field 
 */
export const TextArea = (props) => {
    const [focused, setFocused] = useState("false");
    const [openError, setOpenError] = useState(false);

    return (
        <section className="relative input-field w-full">
            <div className="relative">
                <textarea rows={5} className="input" pattern={props?.pattern?.regex} required={props?.required} focused={focused} onBlur={() => { setFocused("true"); setOpenError(false); }} type={props?.type} id={props?.name} name={props?.name} onChange={props?.onChange} placeholder={props?.placeholder} autoComplete='off'></textarea>
                <label htmlFor="text">{ props?.label }</label>
                <div className="icons">
                    <IoInformationCircleOutline size={19} className="info" onClick={() => setOpenError(!openError)} />
                </div>
            </div>
            {openError && <p className="message"><b className="block">{ props?.pattern?.error[0] }</b>{ props?.pattern?.error[1] }</p>}
        </section>
    );
}

/**
 * ### Choice Field
 * @usage
 * ```javascript
 *  const [formData, setFormData] = useState({
        clearedInstitutions: [1, 2, 3]
    });

 *  const institutions = [{value: 1, label: 'INST-1'}, {value: 2, label: 'INST-2'}, {value: 4, label: 'INST-4'}, {value: 3, label: 'INST-3'}];
 * 
 *  <ChoiceBox type='checkbox' name='institutions' values={formData.Institutions} items={institutions} className="grid sm:grid-cols-3" label="Instutions" onChange={handleChoice} />
 * ```
 * @param {*} props 
 * @returns checkbox | radio button 
 */
export const ChoiceBox = (props) => {
    return (
        <div className={`choiceBox w-full ${props.className}`}>
            <label className="font-bold text-md">{ props.label }</label>
            {props?.items?.map((item) => (
                <span key={props.name + item.value} className="flex items-center gap-2 px-2 py-1"><input name={props.name} value={item.value} type={props.type} required={props?.required} onChange={props?.onChange} checked={props.values.find(x => x === item.value ? true : false)} /> { item.label }</span>
            ))}
        </div>
    );
}

/**
 * ### Form button
 * @usage
 * ```js
 *  const [isLoading, setIsLoading] = useState(true);
 * 
 *  <FormButton text='register' loading={isLoading} type='submit' className="place-self-center mt-12 h-[48px] whitespace-nowrap w-max p-3" />
 * ```
 * @param {*} props 
 * @returns Form button
 */
export const FormButton = (props) => {
    return (
        <button style={{minHeight: '45px'}} className={`bg-secondary-800 border-[1px] border-neutral-600 text-secondary-200 hover:neon-green text-base rounded-md w-1/2 flex justify-center place-items-center gap-5 ${props.className}`} type={props?.type} onClick={props?.event}> {props.loading && <ImSpinner10 className="animate-spin" />} { props.text }</button>
    );
}