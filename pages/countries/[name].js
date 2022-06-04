import Link from 'next/link';

export default function Country({data}) {
    return(
        <main>
            <h1>{data[0]?.name?.common}</h1>
            <p>
                <Link href="/">
                    <a>Back home</a>
                </Link>
            </p>
        </main> 
    )
}

export async function getStaticPaths() {
    const data = await fetch("https://restcountries.com/v2/lang/fr")
    .then(resp=>resp.json());

    const paths = data.map(item=>{
        return{
            params:{
                name:(item.name).toString()
            }
        }
    })

    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}) {
    const data = await fetch(`https://restcountries.com/v3.1/name/${params.name}`) 
    .then(res=>res.json());

    return{
        props:{
            data,
        }
    }
}