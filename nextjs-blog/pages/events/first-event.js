import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Firstevent(){
    return (
        <Layout>
            <Head>
                <title>First Event</title>
            </Head>
            <Image
                src="/images/event.webp"
                width={480}
                height={270} />
            <h1>First Event開催!</h1>
            <div>
                <p>●月●日●●大学にてコロナ明け初のFirst Eventが開催されます。</p>
            </div>
        </Layout>
    );
}