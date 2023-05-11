import React, { useContext, useEffect, useState } from 'react'

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { SkillsContainer, Title, SkillsStyled, SkillsContent, AllSkills } from './styles/skills'

import { ContextData } from '../../context/ContextProvider.jsx'


function Skills() {

  const { theme } = useContext(ContextData)

  const [chartOptions, setChartOptions ] = useState({
    chart: {
      backgroundColor: 'transparent'
    },
    title: {
      text: '',
    },
    yAxis: {
      gridLineColor: theme.primaryBorder,
      title: {
        text: 'Progress',
        style: {color: theme.primaryColor}
      },
      labels: {
        style: {
          color: theme.primaryColor
        },
        formatter: function () {
          return `${this.value}%`
        }
      }
   },
    xAxis: {
      categories: ['Html', 'Css', 'Styled Components', 'Sass', 'Javascript', 'Typescript', 'Python', 'React Js', 'React Native', 'Next Js', 'Redux', 'Node Js', 'Express', 'Java', 'Git', 'MongoDB', 'Terminal', 'Firebase', 'Heroku', 'Netlify'],
      labels: {
        style: {
          color: theme.primaryColor
        }
      }
    },
    series: [{
      name: 'skills',
      type: 'column',
      color: 'yellow',
      borderColor: 'yellow',
      data: [90, 90, 80, 80, 80, 60, 60, 80,
          70, 60, 60, 70, 70, 80, 80, 70, 60, 50, 50, 50],
      showInLegend: true
    }]
  })

  useEffect(() => {
    setChartOptions({
      ...chartOptions,
      title: {
        text: '',
      },
      yAxis: {
        gridLineColor: theme.primaryBorder,
        title: {
          text: 'Progress',
          style: {color: theme.primaryColor}
        },
        labels: {
          style: {
            color: theme.primaryColor
          },
          formatter: function () {
            return `${this.value}%`
          }
        }
     },
      xAxis: {
        categories: ['Html', 'Css', 'Styled Components', 'Sass', 'Javascript', 'Typescript', 'Python', 'React Js', 'React Native', 'Next Js', 'Redux', 'Node Js', 'Express', 'Java', 'Git', 'MongoDB', 'Terminal', 'Firebase', 'Heroku', 'Netlify'],
        labels: {
          style: {
            color: theme.primaryColor
          }
        }
      },
      series: [{
        name: 'skill',
        type: 'column',
        color: 'yellow',
        borderColor: 'yellow',
        data: [90, 90, 80, 80, 80, 60, 60, 80,
            70, 60, 60, 70, 70, 80, 80, 70, 60, 50, 50, 50],
        showInLegend: true
      }],
      legend: {
        enabled: false
      }
    })
  }, [theme])

  return (
    <SkillsStyled>
      <SkillsContainer>
        <Title color={theme.primaryColor}> 💪 Skills</Title>
        <SkillsContent 
        scrollBarTrackColor={theme.secondaryBackground}
        scrollBarThumbColor={theme.thirdBackground}>
          <AllSkills>
            <HighchartsReact
              highcharts={Highcharts}
              options={chartOptions}
              style={{width: '100%'}}
              showInLegend={false}
            />
          </AllSkills>
        </SkillsContent>
      </SkillsContainer>
    </SkillsStyled>
  )
}

export default Skills