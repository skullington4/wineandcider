import { useState } from 'react';
import S1harvest from '../../components/S1harvest/S1harvest';
import S2Destemming from '../../components/S2Destemming/S2Destemming';
import S3Must from '../../components/S3Must/S3Must';
import S4Fermentation from '../../components/S4Fermentation/S4Fermentation';
import S5Blending from '../../components/S5Blending/S5Blending';
import S6Cold from '../../components/S6Cold/S6Cold';
import S7Hot from '../../components/S7Hot/S7Hot';
import S8Clarification from '../../components/S8Clarification/S8Clarification';
import S9Bottling from '../../components/S9Bottling/S9Bottling';
import S10Labeling from '../../components/S10Labeling/S10Labeling';
import S11Aging from '../../components/S11Aging/S11Aging';




export default function Steps({}) {

  return (
    <main>
        <h1>Steps Page</h1>
        <S1harvest />
        <S2Destemming />
        <S3Must />
        <S4Fermentation />
        <S5Blending />
        <S6Cold />
        <S7Hot />
        <S8Clarification />
        <S9Bottling />
        <S10Labeling />
        <S11Aging />
    </main>
  );
}