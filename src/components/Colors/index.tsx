import { defaultTheme } from '@/styles/theme/default'
import { ColorsGridContainer, ColorsGridContent } from './styles'
import { getContrast } from 'polished'

export const ColorsGrid = () => {
  return Object.entries(defaultTheme).map(([key, color]) => {
    return (
      <ColorsGridContainer
        variant={color}
        key={key}
        data-testid="colors-grid-container"
      >
        <ColorsGridContent
          variant={getContrast(color, '#FFF') < 1.5 ? '#000' : '#FFF'}
        >
          <strong>{key}</strong>
          <span>{color}</span>
        </ColorsGridContent>
      </ColorsGridContainer>
    )
  })
}
