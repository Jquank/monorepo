/* eslint-disable @typescript-eslint/no-explicit-any */
import request from 'common/utils/request'

/** 获取肖像列表（带搜索） */
export const getPortraitListBy = (data: any): Promise<any> => {
  return request({
    url: '/classification/portrait/listByFilter',
    method: 'post',
    data
  })
}

/** 获取肖像列表 */
export const getPortraitList = (params: any): Promise<any> => {
  return request({
    url: '/classification/portrait/list',
    method: 'get',
    params
  })
}

/** 获取过滤字典数据 */
export const getDictData = (): Promise<any> => {
  return request({
    url: '/classification/portrait/getFilter',
    method: 'get'
  })
}

/** 删除肖像 */
export const deletePortrait = (ids: string): Promise<any> => {
  return request({
    url: `/classification/portrait/${ids}`,
    method: 'delete'
  })
}

/** 新增肖像 */
export const postPortrait = (data: any): Promise<any> => {
  return request({
    url: '/classification/portrait',
    method: 'post',
    data
  })
}

/** 查询单个肖像信息 */
export const getPortraitById = (id: string): Promise<any> => {
  return request({
    url: `/classification/portrait/${id}`,
    method: 'get'
  })
}

/** 修改肖像信息 */
export const putPortrait = (data: string): Promise<any> => {
  return request({
    url: '/classification/portrait',
    method: 'put',
    data
  })
}
