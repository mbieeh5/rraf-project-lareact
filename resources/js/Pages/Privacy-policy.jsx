import BasicSection from '@/Components/BasicSection';
import { Head } from '@inertiajs/react';
import React from 'react';
import styled from 'styled-components';

export default function CookiesPolicy() {
  return (
    <BasicSection title='Privacy Policy' overTitle='Kebijakan Privacy'>
        <Head title='Privacy Policy'>

        </Head>
      <CookiesPolicyContainer>
      <RichText>
          <p>
          Terakhir diperbarui: 04/10/2023
          <br />
          Selamat datang di Rraf Project. Kami berkomitmen untuk menjaga privasi dan keamanan informasi pribadi Anda. 
          Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi Anda saat Anda mengakses atau menggunakan layanan kami. 
          Dengan menggunakan layanan kami, Anda setuju untuk tunduk pada Kebijakan Privasi ini.
          </p>
          <br />
          <strong>
          1. Informasi yang Kami Kumpulkan
          </strong>
          <ul>
            <li>
            Kami dapat mengumpulkan berbagai jenis informasi, termasuk:
            </li>
            <li>Informasi pribadi yang Anda berikan kepada kami, seperti nama, alamat email, nomor telepon, dll.</li>
            <li>Informasi yang kami kumpulkan otomatis saat Anda mengakses atau menggunakan layanan kami, seperti alamat IP, jenis perangkat, browser yang digunakan, dan data penggunaan.</li>
            <li>Informasi yang kami dapatkan dari sumber lain, seperti mitra bisnis, penyedia layanan pihak ketiga, atau sumber publik.</li>
          </ul>
          <br />
          <strong>
          2. Penggunaan Informasi
          </strong>
          <ul>
            <li>
            Kami menggunakan informasi pribadi Anda untuk:
            </li>
            <li>Memberikan, memelihara, dan meningkatkan layanan kami.</li>
            <li>Mengelola akun Anda dan memberikan dukungan pelanggan.</li>
            <li>Melakukan analisis dan penelitian untuk meningkatkan pengalaman pengguna.</li>
          </ul>
          <br />
          <strong>
          3. Pengungkapan Informasi
          </strong>
          <ul>
            <li>
            Kami mungkin membagikan informasi pribadi Anda kepada pihak ketiga dalam situasi berikut:
            </li>
            <li>Dengan persetujuan Anda.</li>
            <li>Untuk memenuhi kewajiban hukum atau permintaan resmi.</li>
            <li>Untuk melindungi hak, keamanan, atau properti kami atau orang lain.</li>
          </ul>
          <br />
          <strong>
          4. Keamanan Data
          </strong>
          <ul>
            <li>
            Kami menggunakan langkah-langkah keamanan fisik, teknis, dan administratif yang wajar untuk melindungi informasi pribadi Anda dari akses yang tidak sah atau penggunaan yang tidak sah.
            </li>
          </ul>
          <br />
          <strong>
          5. Hak Privasi Anda
          </strong>
          <ul>
            <li>
            Anda memiliki hak untuk mengakses, mengoreksi, memperbarui, atau menghapus informasi pribadi Anda. Untuk melakukan ini, silakan hubungi kami menggunakan informasi kontak yang disediakan di bawah.</li>
          </ul>
          <br />
          <strong>
          6. Perubahan pada Kebijakan Privasi
          </strong>
          <ul>
            <li>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan tersebut akan berlaku saat kami memposting versi yang diperbarui di situs web kami.
            </li>
          </ul>
          <br />
          <strong>
          7. Hubungi Kami
          </strong>
          <ul>
            <li>
            Jika Anda memiliki pertanyaan atau komentar tentang Kebijakan Privasi ini, silakan hubungi kami di <strong>rrap5@outlook.com</strong>.</li>
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