import { useRef } from "react";
import { auth, storage, db } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";

const Home = () => {
    const form = useRef();

    const submitPortfolio = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        const storageRef = ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: downloadUrl
                    })
                }
            )}
        )
    }

    const savePortfolio = async (portfolio) => {
        try {
            await addDoc(collection(db, 'portfolio'), portfolio)
            .then(() => {
                alert("Portfolio saved successfully")
                form.current.name.value = ""
                form.current.description.value = ""
                form.current.url.value = ""
                form.current.image.value = ""
            })
        } catch (error) {
            alert('Failed to add portfolio');
        }
    }

    return (
        <div className="dashboard">
            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder="Name" name="name" required/></p>
                <p><textarea placeholder="Description" name="description" required/></p>
                <p><input type="text" placeholder="Url" name="url" required/></p>
                <p><input type="file" placeholder="Image" name="image" required/></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </form>
        </div>
    )
}

export default Home