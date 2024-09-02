const Contact = () => {
    return (<div>
        <h1 className="font-bold text-3xl m-4 p-4"> Constact Us</h1>
        <form className="bg-gray-50 flex flex-col gap-4 p-4 w-6/12 m-auto">
            <input type="text" placeholder="Name" className="border border-black m-2 p-2"/>
            <input type="text" placeholder="message" className="border border-black m-2 p-2"/>
            <button className="w-16 rounded-lg m-auto p-2 bg-blue-600 text-white">Submit</button>
        </form>
    </div>)
};

export default Contact;