import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as projectService from '../../utilities/projects-service';
import S0General from '../../components/S0General/S0General';
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




export default function Steps( user ) {

  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(function() {
    async function getProject() {
      const project = await projectService.getSingleProject(id);
      setProject(project);
    }
    getProject();
  }, [id]);

  if (!project) return null;




  return (
    <main>
        <h1> {project.project} Project Page </h1>
        
        <S0General project={project} />

        <S1harvest project={project} />
        <S2Destemming project={project} />


    </main>
  );
}