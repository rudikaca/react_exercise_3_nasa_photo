import React from "react";

const Card = ({ data, setDate, date }) => {

    return (
        <>
            {data?.media_type === 'image' ?
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div>
                    <strong>Copyright:</strong> {data.copyright}
                </div>
                <div style={{display: 'flex', justifyContent: 'center', gap: '50px'}}>
                    <strong>date:</strong> {data.date}
                    <div>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <strong>Explanation:</strong> {data.explanation}
                </div>
                <div>
                    <img style={{ width: '300px', height: '300px'}} src={data.hdurl} alt="hdurl"/>
                </div>
                <div>
                    <strong>Media type:</strong> {data.media_type}
                </div>
                <div>
                    <strong>Service version:</strong> {data.service_version}
                </div>
                <div>
                    <strong>Title:</strong> {data.title}
                </div>
                <div>
                    <img style={{ width: '200px', height: '200px'}} src={data.url} alt="url"/>
                </div>
            </div> : <div><h1>Media type is a video. Please add a video section.</h1></div>}
        </>
    )
}

export default Card;
