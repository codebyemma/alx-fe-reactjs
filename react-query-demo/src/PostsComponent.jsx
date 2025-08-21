import { useQuery } from "@tanstack/react-query"

const fetchPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}

const PostsComponent = () => {
    const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ["post", 1],
        queryFn: fetchPost,
        staleTime: 5000,
    })

    if (isLoading) return <p>Loading ...</p>
    if (error) return <p>{error.message}</p>

    return (
        <div>
            {data.map((dat) => {
                <div key={dat.id}>
                    <h3>{dat.title}</h3>
                    <p>{dat.body}</p>
                </div>
            })}
        </div>
    )
}