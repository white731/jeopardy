class StaticController < ApplicationController
  def index
    layout false

    def index
      render file: Rails.root.join('public', 'index.html')
    end
  end
end
