'use client'

import { useUTMParams } from '@/lib/useUTMParams'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { useState, useEffect } from 'react'

export default function TestUTMPage() {
  const utmParams = useUTMParams()
  const [testUrl, setTestUrl] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const testUTMCapture = () => {
    if (testUrl) {
      window.location.href = testUrl
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">UTM Parameter Test Page</h1>
        
        <div className="bg-dark-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Captured UTM Parameters:</h2>
          <div className="space-y-2">
            <p><strong>utm_source:</strong> {utmParams.utm_source || 'Not set'}</p>
            <p><strong>utm_medium:</strong> {utmParams.utm_medium || 'Not set'}</p>
            <p><strong>utm_campaign:</strong> {utmParams.utm_campaign || 'Not set'}</p>
            <p><strong>utm_term:</strong> {utmParams.utm_term || 'Not set'}</p>
            <p><strong>utm_content:</strong> {utmParams.utm_content || 'Not set'}</p>
          </div>
          
          <div className="mt-4 p-4 bg-dark-700 rounded">
            <h3 className="font-semibold mb-2">Debug Info:</h3>
            <p className="text-sm"><strong>Current URL:</strong> {isClient ? window.location.href : 'Loading...'}</p>
            <p className="text-sm"><strong>Search Params:</strong> {isClient ? window.location.search : 'Loading...'}</p>
            <p className="text-sm"><strong>Session Storage:</strong> {isClient ? sessionStorage.getItem('kleedo-utm-params') || 'Empty' : 'Loading...'}</p>
          </div>
        </div>

        <div className="bg-dark-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Test UTM Capture:</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={testUrl}
                onChange={(e) => setTestUrl(e.target.value)}
                placeholder="Enter test URL with UTM parameters"
                className="flex-1 px-4 py-2 bg-dark-700 text-white rounded border border-gray-600"
              />
              <button
                onClick={testUTMCapture}
                className="px-6 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
              >
                Test URL
              </button>
            </div>
            
            <div className="space-y-2 text-sm">
              <p>Or try these pre-configured URLs:</p>
              <div className="space-y-2">
                <button
                  onClick={() => setTestUrl('/test-utm?utm_source=google&utm_medium=cpc&utm_campaign=ai-recepci&utm_term=salon&utm_content=hero-banner')}
                  className="block w-full text-left p-3 bg-dark-700 rounded hover:bg-dark-600 transition-colors"
                >
                  <span className="font-mono text-primary-400 break-all">
                    /test-utm?utm_source=google&utm_medium=cpc&utm_campaign=ai-recepci&utm_term=salon&utm_content=hero-banner
                  </span>
                </button>
                <button
                  onClick={() => setTestUrl('/test-utm?utm_source=facebook&utm_medium=social&utm_campaign=spring-promo')}
                  className="block w-full text-left p-3 bg-dark-700 rounded hover:bg-dark-600 transition-colors"
                >
                  <span className="font-mono text-primary-400 break-all">
                    /test-utm?utm_source=facebook&utm_medium=social&utm_campaign=spring-promo
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Lead Form Test:</h2>
          <p className="mb-4">This form will capture and send UTM parameters with the lead data.</p>
          <LeadCaptureForm 
            title="Test Lead Capture with UTM"
            subtitle="This form will include UTM parameters in the submission"
            businessType="salon"
          />
        </div>
      </div>
    </div>
  )
}
