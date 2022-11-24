/**
 *
 * AssignmentTable
 *
 */
import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { Table } from './shared/Table'
import { getAssignments } from '../api/assignment'
import { ReportSubmissonCard } from './ReportSubmissionCard'

export function AssignmentTable(props) {
  const [assignmentData, setAssignmentData] = useState([])
  const [visible, hide] = useState(false)

  const reportColumns = [
    {
      title: 'Name',
      dataIndex: 'assignmentName',
      key: 'assignmentName',
      render: function (name) {
        return (
          <div className='text-lg lg:text-2xl font-medium text-text-light font-semibold'>
            {name}
          </div>
        )
      },
    },
    {
      title: 'Date',
      dataIndex: 'submissionDate',
      key: 'submissionDate',
      render: function (date) {
        return (
          <div className='text-lg lg:text-2xl font-medium text-text'>
            {date}
          </div>
        )
      },
    },
    {
      title: 'Status',
      dataIndex: 'statusAndDate',
      key: 'statusAndDate',
      render: function ({ status, date }) {
        let today = new Date()
        let dateParts = date?.split('/')
        let dueDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])

        return (
          <>
            {status && (
              <div
                className={cx(
                  'w-32 lg:w-40 py-1 inline-flex text-sm  lg:text-base leading-5 font-semibold rounded-full text-white',
                  {
                    'bg-success': status.toLowerCase() === 'submitted',
                    'bg-red-500':
                      dueDate > today && status.toLowerCase() === 'pending',
                    'bg-gray-500':
                      dueDate < today && status.toLowerCase() === 'pending',
                  }
                )}
              >
                <span className='mx-auto'>
                  {dueDate < today ? 'Expired' : status.toUpperCase()}
                </span>
              </div>
            )}
          </>
        )
      },
    },
    {
      title: 'Assignment',
      dataIndex: 'status',
      key: 'statusNameDate',
      render: function ({ status, date, name }) {
        let today = new Date()
        let dateParts = date?.split('/')
        let dueDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])

        return (
          <>
            {status && (
              <>
                <button
                  className={cx('text-lg lg:text-2xl font-semibold underline', {
                    'text-primary': status.toLowerCase() === 'submitted',
                    'text-gray-800': status.toLowerCase() === 'pending',
                  })}
                  onClick={() => {
                    if (today < dueDate) {
                      if (status === 'Submitted')
                        console.log('REDIRECT TO VIEW REPORT')
                      else hide(true)
                    }
                  }}
                >
                  {today < dueDate
                    ? status === 'Submitted'
                      ? 'View Report'
                      : 'Upload'
                    : 'Expired'}
                </button>
                <ReportSubmissonCard
                  submissionName={name}
                  submissionType='report'
                  visible={visible}
                  hide={hide}
                ></ReportSubmissonCard>
              </>
            )}
          </>
        )
      },
    },
  ]

  useEffect(() => {
    ;(async () => {
      const assignments = await getAssignments()
      const _assignmentData = assignments.data.data.map((assignment) => {
        return {
          ...assignment,
          statusNameDate: {
            status: assignment.status,
            date: assignment.submissionDate,
            name: assignment.reportName,
          },
          statusAndDate: {
            status: assignment.status,
            date: assignment.submissionDate,
          },
        }
      })
      setAssignmentData(_assignmentData)
    })()
  }, [])

  return (
    <>
      <h3 className='text-text font-semibold text-3xl mb-8 px-8'>
        Assignments
      </h3>

      <Table columns={reportColumns} data={assignmentData} shadow={false} />
    </>
  )
}
