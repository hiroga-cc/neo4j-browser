/*
 * Copyright (c) 2002-2018 "Neo4j, Inc"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react'
import { ExclamationTriangleIcon } from 'browser-components/icons/Icons'
import Ellipsis from 'browser-components/Ellipsis'
import { errorMessageFormater } from './errorMessageFormater'
import { ErrorText } from './styled'

const FrameError = props => {
  if (!props || (!props.code && !props.message)) return null
  const fullError = errorMessageFormater(props.code, props.message)
  return (
    <Ellipsis>
      <ErrorText title={fullError.title}>
        <ExclamationTriangleIcon /> {fullError.message}
      </ErrorText>
    </Ellipsis>
  )
}

export default FrameError
