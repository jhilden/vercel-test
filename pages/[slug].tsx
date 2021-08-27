function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const SlugPage = ({ data }: any) => {
  return <div>
    {JSON.stringify(data)}
  </div>
}

export default SlugPage

export async function getStaticProps({ params }: any) {
  await sleep(3000)
  console.log(params)
  const data = { now: new Date().toLocaleString(), params }

  return {
    props: {
      data
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const paths = [{ params: { slug: "foo" } }]

  return { paths, fallback: 'blocking' }
}
