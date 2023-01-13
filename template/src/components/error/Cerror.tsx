const Cerror = ({ message }: { message?: string }) => {

    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col gap-5">
                <h1>Oupps</h1>
                {
                    message ? (<p className="text-2xl">{message}</p>) : null
                }

            </div>
        </div>
    )
}

export default Cerror