import { stage } from '@/styles/styled/content'
import { PINK } from '@/styles/styled/variable'
import styled from 'styled-components'

export const ArchivesStyle = styled.div`
  ${stage}

  .count {
    font-size: 16px;
  }

  .timeline {

    .year {
      margin-left: 12px;
      font-size: 26px;
      transform: translateY(-7px);
      font-weight: bolder;
    }

    .archive {
      margin-left: 12px;
      display: flex;
      align-items: center;
      transform: translateY(-2px);

      .date {
        color: ${PINK};
        margin-right: 12px;
        font-size: 16px;
      }

      .title {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
`
