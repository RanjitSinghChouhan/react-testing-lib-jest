import React from 'react'

function Application() {
  return (
    <>
    <div>Application</div>
    <form>
        <input type="text" placeholder='Write Name' /><br/>
        <select>
            <option value="guide">Guide</option>
            <option value="lab">Lab</option>
            <option value="music">Music</option>
            <option value="sound">Sound</option>
        </select><br/>
        <input type="checkbox" /><br/>
        <button>Submit</button>
    </form>
    </>)
}

export default Application