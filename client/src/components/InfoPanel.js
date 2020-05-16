import React, { useState } from 'react'
import styled from 'styled-components'
import { useField } from '../hooks/field'

const Container = styled.div`
  border-radius: 0 0 0 1em;
  white-space: nowrap;
  height: 1.7em;
  background-color: #800000;
  color: white;
  padding: 0;
`
const Content = styled.div`
  height: 1.7em;
  display: flex;
  flex-flow: row-wrap;
  font-size: 1em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
  margin: 0;
  padding: 0;
  white-space: nowrap;
`
const LeftButton = styled.button`
  align-items: center;
  font-weight: bold;
  height: 1.5em;
  line-height: 1em;
  margin: .2em;
  padding:.1em .5em .1em .5em;
  border-width: .01em;
`
const RightButton = styled.button`
  align-items: center; 
  font-weight: bold; 
  height: 1.5em; 
  line-height: 1em; 
  margin: .2em .2em .2em 0; 
  padding:.1em .5em .1em .5em; 
  border-width: .01em;
`

const InfoPanel = ({
  name, id, details, update, remove,
}) => {
  const [edit, toggleEdit] = useState(false)
  const newName = useField('text', name)
  const newDetails = useField('text', details)

  const handleUpdate = () => {
    update(id, newName.input.value, newDetails.input.value)
    toggleEdit(!edit)
  }

  return (
    <Container>
      <Content hidden={edit}>
        <div style={{ margin: '0 0 .1em .7em', alignSelf: 'strech', lineHeight: '1em' }}>
          {details}
        </div>
        <div style={{ alignItems: 'center' }}>
          <LeftButton type="button" onClick={() => toggleEdit(!edit)}>
            edit
          </LeftButton>
          <RightButton type="button" onClick={() => remove(id)}>
            delete
          </RightButton>
        </div>
      </Content>
      <Content hidden={!edit}>
        <div style={{ alignSelf: 'strech', alignItems: 'center' }}>
          <input
            placeholder={name}
            style={{ height: '1.6em', width: '5em' }}
            {...newName.input}
          />
          <input
            placeholder={details}
            style={{ height: '1.6em', width: '7em' }}
            {...newDetails.input}
          />
        </div>
        <div style={{ alignSelf: 'strech', alignItems: 'center' }}>
          <LeftButton type="button" onClick={handleUpdate}>
            save
          </LeftButton>
          <RightButton type="button" onClick={() => toggleEdit(!edit)}>
            cancel
          </RightButton>
        </div>
      </Content>
    </Container>
  )
}

export default InfoPanel
