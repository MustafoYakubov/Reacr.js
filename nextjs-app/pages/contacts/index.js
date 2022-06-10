import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users  ");
  const data = await response.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { contacts: data },
  };
};

const index = ({ contacts }) => {
  // const [contacts, setContacts] = useState("");
  // const [photos, setPhotos] = useState(null);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/comments"
  //     );
  //     if (!response.ok) throw new Error("CONNECTION LOST" + response.status);
  //     const fetchedDatas = await response.json();
  //     setContacts(fetchedDatas);
  //   } catch {
  //     console.log("data no");
  //   }
  // }

  // console.log(photos);
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text={"Contacts List :"} />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => {
            return (
              <li key={id}>
                <Link  href={`/contacts/${id}`}>{name}</Link> ({email})
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default index;
