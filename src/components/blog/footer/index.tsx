import React, { Component } from 'react'
import { FooterStyle } from './style'

interface MyFooterState {
  gap: number
}

const BLOG_START_DATE = '2018/04/13 22:57:50'
const DAY_GAP = 1000 * 60 * 60 * 24
const HOUR_GAP = 1000 * 60 * 60
const MINUTE_GAP = 1000 * 60
const SECOND_GAP = 1000

export default class MyFooter extends Component<{}, MyFooterState> {
  private blogStartTimestamp: number = new Date(BLOG_START_DATE).getTime()
  private timer: number
  constructor (props) {
    super(props)
    this.state = {
      gap: new Date().getTime() - this.blogStartTimestamp
    }
  }

  public componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        gap: new Date().getTime() - this.blogStartTimestamp
      })
    }, 1000)
  }

  public componentWillUnmount () {
    this.timer && clearInterval(this.timer)
  }

  public render () {
    return (
      <FooterStyle className="footer">
        <div className="footer-image" />
        <p>
          博客已萌萌哒运行{this.convertGap(this.state.gap)}
          <span className="face">(●'◡'●)ﾉ♥</span>
        </p>
        <p>
          托管于vps.{' '}
          <a href="https://qiniu.com" target="_blank">
            七牛云
          </a>{' '}
          提供 CDN 服务.{' '}
          <a
            href="https://www.google.com/analytics/"
            target="_blank"
          >
            Google Analytics
          </a>{' '}
          提供网站统计服务.
        </p>
        <p>
          © {new Date().getFullYear()} Hi, B1anker. Theme By{' '}
          <a
            href="https://github.com/DIYgod/hexo-theme-sagiri"
            target="_blank"
          />
          Sagiri v0.0.16.{' '}
          <span
            className="record"
            onClick={() => {
              const newWindow = window.open()
              if (newWindow) {
                newWindow.location.href = 'http://www.beian.miit.gov.cn'
              }
            }}
          >
            粤ICP备16024121号-1.
          </span>
        </p>
        <p>
          Made with <i className="iconfont icon-heart" /> by B1anker.
        </p>
      </FooterStyle>
    )
  }

  public convertGap (gap) {
    const day = Math.floor(gap / DAY_GAP)
    const hour = Math.floor((gap - day * DAY_GAP) / HOUR_GAP)
    const minute = Math.floor(
      (gap - day * DAY_GAP - hour * HOUR_GAP) / MINUTE_GAP
    )
    const second = Math.floor(
      (gap - day * DAY_GAP - hour * HOUR_GAP - minute * MINUTE_GAP) / SECOND_GAP
    )
    return `${day}天${hour}小时${minute}分${second}秒`
  }
}
