export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/loading',
      permanent: false,
    },
  };
}
export default function Index() { return null; }
