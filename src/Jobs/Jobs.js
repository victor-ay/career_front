import { LinearProgress } from "@mui/material";
import { Container, Stack } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import JobsList from "./JobsList/JobsList";


export default function Jobs(props) {

    const [jobs , setJobs] = useState([])
    const [loadingJobs, setLoadingJobs] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const requestUrl = "http://127.0.0.1:8000/v1/api/jobs"

    const requestJobs = async() =>{
        setLoadingJobs(true)
        const response = await axios.get(requestUrl)
		if (response.status === 200) {
            setJobs(response.data['results'])
            console.log('response from server', response.data['results'])
            setLoadingJobs(false)
		} else {
			// dispatch({ type: GAME_ACTIONS.QUESTIONS_FETCH_ERROR, msg: response.statusText})
            console.log('NO 200', response)
            setLoadingJobs(false)
            setErrorMessage(response.status)
		}
    }

    useEffect (()=>{
        console.log('triggered useEffect')
        requestJobs()
    }
        ,[])
    return (
        
        <Container maxWidth="md" >
            <Stack >
                <h1>This is Jobs</h1>
                {loadingJobs && <LinearProgress />}
                {loadingJobs ? <LinearProgress />  : 
                <>
                    <JobsList jobs = {jobs}/>
                </>
                }
            </Stack>

            {}

        </Container>
    )
    
}