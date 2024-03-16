import BasicSection from '@/Components/BasicSection';
import { Head } from '@inertiajs/react';
import React from 'react';
import styled from 'styled-components';

export default function CookiesPolicy() {
  return (
    <BasicSection title='Cookies Policy' overTitle='Kebijakan Cookie'>
      <Head title='Cookies Policy'>

      </Head>
      <CookiesPolicyContainer>
        <RichText>
          <p>
          Selamat datang di rraf project. Kebijakan Cookie ini menjelaskan bagaimana kami menggunakan cookie dan teknologi serupa lainnya saat Anda mengakses atau menggunakan situs web kami. Dengan mengakses atau menggunakan situs web kami, Anda setuju untuk tunduk pada Kebijakan Cookie ini.
          </p>
          <br />
          <strong>
          1. Apa itu Cookie?
          </strong>
          <ul>
            <li>
            Cookie adalah file kecil yang disimpan di perangkat Anda saat Anda mengunjungi situs web. Cookie dapat mengandung informasi seperti preferensi pengguna, data analitik, dan informasi lainnya yang membantu meningkatkan pengalaman pengguna.
            </li>
          </ul>
          <br />
          <strong>
          2. Jenis Cookie yang Kami Gunakan
          </strong>
          <ul>
            <li>
            Kami menggunakan beberapa jenis cookie, termasuk:
            </li>
            <li>Cookie yang diperlukan: Cookie ini penting untuk menjalankan situs web kami dan memungkinkan Anda untuk mengakses fitur-fitur utama.</li>
            <li>Cookie Analitik: Cookie ini digunakan untuk mengumpulkan informasi tentang cara Anda menggunakan situs web kami, termasuk halaman yang Anda kunjungi dan waktu yang Anda habiskan di situs web tersebut. Informasi ini digunakan untuk analisis dan perbaikan.</li>
            <li>Cookie Fungsionalitas: Cookie ini memungkinkan situs web kami untuk mengingat pilihan Anda, seperti bahasa atau wilayah Anda, untuk memberikan pengalaman yang lebih personal.</li>
            <li>Cookie Pihak Ketiga: Kami juga dapat menggunakan cookie pihak ketiga, seperti Google Analytics, untuk mengumpulkan data analitik tambahan tentang penggunaan situs web kami.</li>
          </ul>
          <br />
          <strong>
          3. Bagaimana Anda Bisa Mengelola Cookie
          </strong>
          <ul>
            <li>
            Anda dapat mengelola pengaturan cookie di perangkat Anda melalui pengaturan browser Anda. Anda dapat menghapus cookie yang ada dan mengatur pengaturan untuk menerima atau menolak cookie baru. Harap diperhatikan bahwa menonaktifkan cookie dapat memengaruhi beberapa fitur situs web kami.
            </li>
          </ul>
          <br />
          <strong>
          4. Perubahan pada Kebijakan Cookie
          </strong>
          <ul>
            <li>
            Kami dapat memperbarui Kebijakan Cookie ini dari waktu ke waktu. Perubahan tersebut akan berlaku saat kami memposting versi yang diperbarui di situs web kami.</li>
          </ul>
          <br />
          <strong>
          5. Hubungi Kami
          </strong>
          <ul>
            <li>
            Jika Anda memiliki pertanyaan atau komentar tentang Kebijakan Cookie ini, silakan hubungi kami di rrap5@outlook.com .</li>
          </ul>

  
        </RichText>
      </CookiesPolicyContainer>
    </BasicSection>
  );
}

const RichText = styled.div`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ol,
  ul {
    list-style: none;
    padding: 0rem;

    li {
      padding-left: 2rem;
      position: relative;

      & > * {
        display: inline-block;
        vertical-align: top;
      }

      &::before {
        position: absolute;
        content: 'L';
        left: 0;
        top: 0;
        text-align: center;
        color: rgb(var(--primary));
        font-family: arial;
        transform: scaleX(-1) rotate(-35deg);
      }
    }
  }

  table {
    border-collapse: collapse;

    table-layout: fixed;
    border-spacing: 0;
    border-radius: 5px;
    border-collapse: separate;
  }
  th {
    background: rgb(var(--textSecondary));
  }

  th,
  td {
    border: 1px solid rgb(var(--textSecondary));
    padding: 1rem;
  }

  tr:nth-child(even) {
    background: rgb(var(--textSecondary));
  }
`;

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;