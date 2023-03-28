import Job from "./Job/Job"

export default function JobsList({jobs}) {

    console.log('JobsList', jobs)

    const items = jobs.map( (jb) => <Job key={jb['id']} job={jb}/>)

    return (
        <>
            {items}
            <p></p>
        </>

    )
    
}