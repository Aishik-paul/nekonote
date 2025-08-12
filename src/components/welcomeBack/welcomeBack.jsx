function WelcomeBack({name}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#fff9f2]">
            <h1 className="text-5xl font-extrabold text-center my-10">
                Welcome Back! {name}
            </h1>
            <p className="text-lg text-center mb-4">
                It's great to see you again! Let's continue where we left off.
            </p>
        </div>
    );
}

export default WelcomeBack;