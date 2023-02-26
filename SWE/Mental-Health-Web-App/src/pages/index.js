import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import Form from '@/components/Form';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();
  let name = "";
  let email = "";
  if (session) {
    email = session.user.email
    name = session.user.name.split(" ")[0]
  }
  let [number, setNumber] = useState(0);
  const question = 'Feeling down?';
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mh.png" />
      </Head>
      <main className={styles.main}>
        <div className="flex h-16 mb-6">
          <div class="nav-welcome">
            <h1 className="text-[24px]">Mental health</h1>
          </div>
          <div class="nav-account">
            {(session) &&
              <>
                <Link href="/">
                  <li className="ml-10 text-sm uppercase hover:border-b">
                    <p className="hidden md:block mr-6 text-[24px]"><span className="text-[blue]">Welcome, {name}!</span></p>
                  </li>
                </Link>
                
                <Link href="/" >
                  <Image
                    src={session.user.image}
                    alt="/"
                    width="40"
                    height="40"
                    className="rounded-full ml-3 group-hover:opacity-20"
                  />
                </Link>
              
              
              </>
            }
            <Link href="/" onClick={signIn}>{(!session) &&
              <button>Login</button>
            }
            </Link>
            <Link href="/cart">
              <button className="xs:p-0 text-sm">Cart {number}</button>
            </Link>
            <Link href="/" >
              <Image
                src={session.user.image}
                alt="/"
                width="40"
                height="40"
                className="rounded-full ml-3 group-hover:opacity-20"
              />
            </Link>
            <Link href="/" onClick={signOut}>{(session) &&
              <button>Logout</button>
            }
            </Link>
          </>
        }
        <Link href="/" onClick={signIn}>{(!session) &&
          <button>Login</button>
        }
        </Link>
        </div>
      </main>
    </>
  )
}