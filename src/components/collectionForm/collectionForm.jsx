import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { useState } from 'react'
import { modules, formats } from './quillConfig.js'


function CollectionForm(){
    const [fields, setFields] = useState([]);
    const [uniqueKey, setUniqueKey] = useState(0);
    const [text, setText] = useState('');

    function handleAddField(){
        const newField = (
            <div key={uniqueKey} className="row align-items-center mb-3">
                <div className="col-4">
                    <label className="control-label">
                        Filed name:
                    </label>
                    <input
                        className="form-control fs-5"
                    />
                </div>
                <div className="col-4">
                    <label className="control-label">
                        Type:
                    </label>
                    <select className="form-select text-center fs-5">
                        <option>Books</option>
                        <option>Sigars</option>
                        <option>Wiskey</option>
                        <option>Cars</option>
                        <option>Coins</option>
                    </select>
                </div>
                <div className="col-3">
                    <button 
                        onClick={()=>{
                            setFields(o=>o.filter(i=>i.key!==uniqueKey));
                        }}
                        className="btn btn-danger"
                        >
                            X
                        </button>
                </div>
            </div>
        )
        setUniqueKey(o=>o+1);
        setFields([...fields.map(i=>({...i})), {key: uniqueKey, field: newField}]);
    }

    const labelStyle='col-xl-3 col-lg-3 col-md-3 col-auto text-end align-self-center';
    return(
        <div className="m-2 mt-4 row fs-5" >
            <div className="row p-0 m-0 mb-3">
                <div className={labelStyle}>Collection name: </div>
                <div className="col-xl-7 col-lg-8 col-md-9">
                    <input className="form-control fs-5" />
                </div>
            </div>
            <div className="row p-0 m-0 mb-3">
                <div className={labelStyle}>Description: </div>
                <div className="col-xl-7 col-lg-8 col-md-9 fs-5">
                    <ReactQuill 
                        theme="snow" 
                        value={text} 
                        onChange={setText}
                        modules={modules}
                        formats={formats} 
                    />
                </div>
            </div>
            <div className="row p-0 m-0 mb-3">
                <div className={labelStyle}>Topic: </div>
                <div className="col-xl-7 col-lg-8 col-md-9">
                    <select className="form-select text-center fs-5">
                        <option>Books</option>
                        <option>Sigars</option>
                        <option>Wiskey</option>
                        <option>Cars</option>
                        <option>Coins</option>
                    </select>
                </div>
            </div>
            <div className="row p-0 m-0 mb-3">
                <div className={labelStyle}>Image (optional): </div>
                <div className="col-xl-7 col-lg-8 col-md-9">
                    <div style={{height: 150, backgroundColor: 'blue'}}></div>
                </div>
            </div>
            <div className="row p-0 m-0 mb-3">
                <div className={labelStyle}>Additional fields for items: </div>
                <div className="col-xl-7 col-lg-8 col-md-9">
                    {fields.map(i=>i.field)}
                    <button 
                        onClick={handleAddField}
                        className="btn btn-primary"
                    >
                        + Add field
                    </button>
                </div>
            </div>
            <div className="justify-self-end row justify-content-end">
                <button className="btn btn-primary col-auto fs-5 px-4 py-2">
                    Save
                </button>
            </div>
        </div>
    )
}

export { CollectionForm }