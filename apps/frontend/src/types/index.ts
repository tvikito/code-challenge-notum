import { NodeDto } from '@api/models'

export interface Tree extends NodeDto {
  children: Tree[]
}
