import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import Pagination from "@/components/Pagination";
import { API_URL, PER_PAGE } from "@/config/index";

export default function EventsPage({ events, page, total }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt.attributes} />
      ))}

      <Pagination page={page} total={total} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  const totalRes = await fetch(`${API_URL}/events`);
  const totalJson = await totalRes.json();
  const total = totalJson.meta.pagination.total;

  const eventRes = await fetch(
    `${API_URL}/events?sort[0]=date:ASC&pagination[limit]=${PER_PAGE}&pagination[start]=${start}`
  );
  const resJson = await eventRes.json();
  const events = resJson.data;
  return {
    props: { events, page: +page, total },
  };
}
